import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Keg from '../Keg/Keg';
import { addItem, updateItem, deleteItem, enterEdit, leaveEdit } from '../../actions';
import './KegList.scss';

class KegList extends React.Component {

  componentDidMount() {
    this.props.kegData.kegs.forEach(keg => {
      const key = v4();
      this.props.addItem(key, keg.name, keg.brand, keg.pricePerPint, keg.alcoholContent, keg.pintsRemaining, keg.isGlutenFree, keg.isVegan);
    });
  }

  /* onClickPurchasePint - decrement remaining pints when a pint is purchased */
  onClickPurchasePint = (key) => {
    const keg = this.props.kegs.filter(keg => keg.key === key)[0];
    let pintsRemaining = keg.pintsRemaining - 1;
    if (pintsRemaining < 1) { pintsRemaining = 0 }
    this.props.updateItem(key, keg.name, keg.brand, keg.pricePerPint, keg.alcoholContent, pintsRemaining, keg.isGlutenFree, keg.isVegan);
  }

  /* onClickEditKeg - set the item being edited when the Keg's Edit button is clicked */
  onClickEditKeg = event => { this.props.enterEdit(event.target.id); }

  /* onClickAddKeg - create a new Keg at the top of the list and in Edit mode when the Add Keg button is clicked */
  onClickAddKeg = () => {
    const key = v4();
    this.props.addItem(key, '', '', 0.00, 0.0, 124, false, false);
    this.props.enterEdit(key);
  }

  /* onClickDeleteKeg - delete a Keg when the Delete button on the Edit screen is clicked */
  onClickDeleteKeg = event => {
    this.props.deleteItem(event.target.id);
    this.props.leaveEdit();
  }

  /* onClickSaveKeg - Update the record for the Keg that was just edited when the Save button is clicked */
  onClickSaveKeg = event => {
    let keg = event.target;
    console.log(keg)
    this.props.updateItem(keg.id, keg.name.value === '' ? 'Nameless One' : keg.name.value, keg.brand.value, keg.price.value, keg.alcohol.value, keg.pints.value, keg.gluten.value.toLowerCase() === 'yes', keg.vegan.value.toLowerCase() === 'yes');
    this.props.leaveEdit();
  }

  generateEditModeUI(keg) {
    return (
      <form id={keg.key} onSubmit={this.onClickSaveKeg}>
        <label>Name: <input className='keg-name' id='name' defaultValue={keg.name} /></label>
        <hr />
        <div><label>Brand: <input id='brand' defaultValue={keg.brand}></input></label></div>
        <div><label>Price per Pint $: <input id='price' defaultValue={keg.pricePerPint} /></label></div>
        <div><label>Alcohol Content %: <input id='alcohol' defaultValue={keg.alcoholContent} /></label></div>
        <div><label>Gluten Free: <input id='gluten' defaultValue={keg.isGlutenFree ? 'Yes' : 'No'} /></label></div>
        <div><label>Vegan: <input id='vegan' defaultValue={keg.isVegan ? 'Yes' : 'No'} /></label></div>
        <div><label>Pints Remaining: <input id='pints' defaultValue={keg.pintsRemaining} /></label></div>
        <div>
          <input type='submit' value='Save' />
        </div>
        <div><button onClick={this.onClickDeleteKeg} id={keg.key}>Delete</button></div>
      </form>
    );
  }

  generateNormalModeUI(keg) {
    return (
      <React.Fragment>
        <div className='keg-name'>{keg.name}</div>
        <hr />
        <div>Price per Pint: <span className='keg-price'>${keg.pricePerPint}</span></div>
        <br />
        <div>Pints Remaining: <span>{keg.pintsRemaining}</span>
          {keg.pintsRemaining > 0 && keg.pintsRemaining < 10 ? <span className='warning'>Almost Emtpy</span> : ''}
          {keg.pintsRemaining <= 0 ? <span className='warning'>Out of Stock</span> : ''}
        </div>
        <br />
        <details>
          <summary>Details</summary>
          <br />
          <div className='within-details'>
            <div>Brand: <span>{keg.brand}</span></div>
            <div>Alcohol Content: <span>{keg.alcoholContent}%</span></div>
            <div>Gluten Free: <span>{keg.isGlutenFree ? 'Yes' : 'No'}</span></div>
            <div>Vegan: <span>{keg.isVegan ? 'Yes' : 'No'}</span></div>
          </div>
        </details>
        <br />
        <button onClick={() => { this.onClickPurchasePint(keg.key); }} id={keg.key}>Purchase Pint</button>
        <button onClick={this.onClickEditKeg} id={keg.key}>Edit</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      < div className="KegList" >
        <div className='add-keg-outer'>
          <div className='add-keg-inner'>
            <button onClick={this.onClickAddKeg}>Add Keg</button>
          </div>
        </div>
        <div className='flexbox'>{this.props.kegs.map(keg =>
          <Keg key={keg.key}>
            {this.props.edit.key === keg.key ? this.generateEditModeUI(keg) : this.generateNormalModeUI(keg)}
          </Keg >)}
        </div>
      </div >
    );
  }
}

KegList.propTypes = {
  kegReducer: PropTypes.arrayOf(Object)
}

const mapStateToProps = state => { return { kegs: state.kegReducer, edit: state.editReducer } }
KegList = connect(mapStateToProps, { addItem, updateItem, deleteItem, enterEdit, leaveEdit })(KegList);
export default KegList;
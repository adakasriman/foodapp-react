import React from 'react';

function Recipes(props) {
    return (
        <div>
            <div className='our-recipes'>
                <h1 className='header'>Our Recipes</h1>
                <form>
                    <div className='filter'>
                        <div className='filter-items'>
                            <h5>
                                Filter recipes by
                            </h5>
                            <div className=''>
                                <i className="fas fa-plus"></i>
                            </div>
                        </div>
                        <div className='form-selectAndSearch'>
                            <div className='sort-iems'>
                                <label for="sort">Sort by</label>
                                <select className='form-select' id="sort" name='sort'>
                                    <option value="1">Newest first</option>
                                    <option value="2">Newest second</option>
                                    <option value="3">Newest third</option>
                                    <option value="4">Newest fourth</option>
                                </select>
                            </div>
                            <div className='search-recipes'>
                                <label><i className="fas fa-search"></i></label>
                                <input type="search" placeholder='Serach recipe' />
                            </div>
                        </div>
                    </div>
                    <div className='filter-types'>
                        <div className='type-options'>
                            <div className='checkboxs'>
                                <h5>Food Type :</h5>
                                <div className="form-group">
                                    <input type="CheckBox" id="appetisers" name="appetisers" />
                                    <label for="appetisers">Appetisers</label>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id="mains" name="mains" />
                                    <label for="mains">Mains</label>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id="desserts" name="desserts" />
                                    <label for="desserts">Desserts</label>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id="occasions" name="occasions1" />
                                    <label for="occasions">Special Occasions</label>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='Nataionality'>
                            <h5>Nataionality:</h5>
                            <div className='Nataionality-types'>
                                <div>
                                    <div className="form-group">
                                        <input type="checkbox" id="italian" name="italian" />
                                        <label for="italian">Italian(34)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="french" name="french" />
                                        <label for="french">French(30)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="spanish" name="spanish" />
                                        <label for="spanish">Spanish(22)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="paruvian" name="paruvian" />
                                        <label for="paruvian">paruvian(3)</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <input type="checkbox" id="chinese" name="chinese" />
                                        <label for="chinese">Chinese(18)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="indian" name="indian" />
                                        <label for="indian">Indian(13)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="thai" name="thai" />
                                        <label for="thai">Thai(10)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="norwegian" name="norwegian" />
                                        <label for="norwegian">Norwegian(4)</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <input type="checkbox" id="polish" name="polish" />
                                        <label for="polish">Polish(2)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="danish" name="danish" />
                                        <label for="danish">Danish(3)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="vehicle1" name="belgian" />
                                        <label for="belgian">Belgian(7)</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="persian" name="persian" />
                                        <label for="persian">Persian(13)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Recipes;
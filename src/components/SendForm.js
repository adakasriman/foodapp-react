import React from 'react';

function SendForm(props) {
    return (
        <div className='sendForm'>
            <form className='form'>
                <h1>Spread the world!</h1>
                <p>Our recipes are awesome, sign up our newletters and invite your friends to jion the Grilled Prawn</p>
                <div className='sendingData-types'>
                    <div className='userData'>
                        <div class="form-group">
                            <label for="userName">Name</label>
                            <input type="text" id="userName" name="userName" placeholder='name' />
                        </div>
                        <div class="form-group">
                            <label for="surname">Surname</label>
                            <input type="text" id="surname" name="surname" placeholder='surname' />
                        </div>
                        <div class="form-group">
                            <label for="gmail">Email address</label>
                            <input type="gmail" id="gmail" name="gmail" placeholder='gmail' />
                        </div>
                    </div>
                    <button className='button'><i class="fas fa-trash"></i><span>Delete</span></button>
                </div>
                <hr />
                <div className='sendingData-types'>
                    <div className='userData'>
                        <div class="form-group">
                            <label for="userName">Name</label>
                            <input type="text" id="userName" name="userName" placeholder='name' />
                        </div>
                        <div class="form-group">
                            <label for="surname">Surname</label>
                            <input type="text" id="surname" name="surname" placeholder='surname' />
                        </div>
                        <div class="form-group">
                            <label for="gmail">Email address</label>
                            <input type="gmail" id="gmail" name="surname" placeholder='gmail' />
                        </div>
                    </div>
                    <button className='add-friend'>Add Friend</button>
                </div>
                <div className='send-btn'>
                    <button className='button'>Send<span><i className="fas fa-long-arrow-alt-right"></i></span></button>
                </div>
            </form>
        </div>
    );
}

export default SendForm;
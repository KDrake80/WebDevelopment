const react = require('react')

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const pinRegex = /^\d{4}$/;
const phoneRegex = new RegExp(/^\d{10}$/);

const defaultState = {
    name: "",
    email: "",
    pin: "",
    number: "",
};

export const CustReg = () => {
    const [state, setState] = react.useState(defaultState)

    let valid = { FullName: false, EMail: false, Pin: false, PhoneNumber: false }

    const handleChanges = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };



    const validateEmail = () => {
        valid.EMail = emailRegex.test(state.email);
    }
    const validatePin = () => {
        valid.Pin = pinRegex.test(state.pin);
    }
    const validateName = () => {
        valid.FullName = state.name.length > 0;
    }

    const validatePhone = () => {
        valid.PhoneNumber = phoneRegex.test(state.phone);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validateName();
        validatePin();
        validatePhone()

        const invalid = [];
        for (const item of Object.keys(valid)) {
            if (!valid[item]) {
                invalid.push(item);
            }
        }
        
        if (invalid.length !== 0) {
            alert(`${invalid.join(", ")} ${invalid.length > 1 ? "are all" : "is"} invalid.`)
        }
        alert("Thank you " + state.name + " for entering your information," +
        "\nYour account will be viewable in about an hour!")
        return setState(defaultState)
       
        

    };

    return (
        <form className='CustomerRegistration' onSubmit={handleSubmit} >
            <div className='text-control'>
            <h1>Customer Registration</h1>
            <h5>
                Enter Information:
                Full Legal Name, Email Address, 4-Digit Pin number, and Phone number
            </h5>
            </div>
            <div className='label-control'>
            <label>Full Name:  
                <input type="text" name="name" onChange={handleChanges} value={state.name} />
            </label><br />
            <label>E-mail Address:
                <input type="text" name="email" onChange={handleChanges} value={state.email} />
            </label><br />
            <label>Pin:
                <input type="text" name="pin" onChange={handleChanges} value={state.pin} />
            </label><br />
            <label className='phone'>Phone Number:
                <input type="text" name="phone" onChange={handleChanges} value={state.phone} />
            </label><br />
            </div>
            <div className='input-control'>
            <input
                type="submit"
                value="Submit"
            />
            </div>
        </form>
    )
}

export default CustReg;
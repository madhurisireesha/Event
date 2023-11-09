import './index.css'

const Activeevent=(props)=>{
    const{status}=props
    const activestatus={
        yettoregister:'YET_TO_REGISTER',
        registered:'REGISTERED',
        registrationsclosed:'REGISTRATIONS_CLOSED'
    }
    const selectActiveStatus=()=>{
        
        switch(status)
        {
            case activestatus.yettoregister:
                return yetToRegister()
            case activestatus.registered:
                return registered()
            case activestatus.registrationsclosed:
                return registrationsClosed()
            default:
                return noEvent()
        }
    }
    const yetToRegister=()=>(
    
        <div className="view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-image"
        />
        <p className="register-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="register-here-button">
          Register Here
        </button>
      </div>
    )
    const registered=()=>(
        <div className="view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-img"
        />
        <h1 className="registered-heading">
          You have already registered for the event
        </h1>
      </div>
    )
    const registrationsClosed=()=>(
        <div className="view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registrations-closed-image"
        />
        <h1 className="registrations-closed-heading">
          Registrations Are Closed Now!
        </h1>
        <p className="registrations-closed-description">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    )
    const noEvent=()=>(
        <p className="no-active-event-description">
        Click on an event, to view its registration details
      </p>
    )
    return(
        <div className="registration-status-container">
        {selectActiveStatus()}
        </div>
    )
}
export default Activeevent
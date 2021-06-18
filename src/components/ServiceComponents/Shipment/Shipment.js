import React, { useContext } from 'react';
import Sidebar from '../../ShareComponents/Sidebar/Sidebar';
import "./Shipment.css"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductContext } from '../../../App';
import Adress from '../Adress/Adress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUserShield, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return  <Adress/>;
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}
const Shipment = () => {
    const [viewdata, setViewdata] = useContext(ProductContext)
    console.log(viewdata)
    const { imageURL, Area, Duration, Woekers, name, price,detailes,_id } = viewdata;
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <div className="row m-0">
                <div className="col-md-3 p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <div className={classes.root}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography className={classes.instructions}>All steps completed</Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}
                                        >
                                            Back
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div class="col-md-4 container">

                <div class="card mb-3" style={{ maxWidth: "440px" }}>
        <div class="row g-0">
          <div class="col-md-5">
            <img src={imageURL} alt="..." style={{ width: "100%", height: "100%" }} />
          </div>
          <div class="col-md-7">
            <div class="card-body text-start">
              <h6 class="card-title text-start">{name}</h6>
                                    <h3 class="card-text  text-start shipment-price">${price}</h3>
                  <p class="card-text text-start text-muted">Duration: {Duration} </p>
                  <p class="card-text text-start text-muted ">Workers: {Woekers}   </p>
                  <p class="card-text  text-start text-muted">Area: {Area} </p>
                    </div>
            </div>

        </div>
      </div>
      <div class="d-flex justify-content-evenly">
                                    <p>SUBTOTAL <span class="shipment-font">${price}</span></p>
                                    <p> SHIPPING <span class="shipment-font">FREE</span></p>
                    </div>
                    <hr class="mt-4" />
                    <h2 class="mt-4 fw-normal text-start ">TOTAL (TAX EXCL.) <span class="shipment-price">${price}</span> </h2>
                    <hr class="mt-4"/>
                    <div className="service-policy mt-5">
                      <p class="text-start"><FontAwesomeIcon icon={faUserShield} /> <span class="ms-2">Security policy (edit with Customer reassurance module)</span></p>
                      <p class="text-start"><FontAwesomeIcon icon={faTruck} /> <span class="ms-2"> Delivery policy (edit with Customer reassurance module)</span></p>
                      <p class="text-start"><FontAwesomeIcon icon={faExchangeAlt} /> <span class="ms-2"> Return policy (edit with Customer reassurance module)</span></p>
                    </div>

    </div>
                </div>
            </div>

    );
};

export default Shipment;
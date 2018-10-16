   export enum Servo {
	//% block="P0"
	Servo0,
	//% block="P1"
	Servo1,
	//% block="P2"
	Servo2,
	//% block="P3"
	Servo3,
	//% block="P4"
	Servo4,
	//% block="P10"
	Servo10,
	//% block="P5"
	Servo5,
	//% block="P6"
	Servo6,
	//% block="P7"
	Servo7,
	//% block="P8"
	Servo8,
	//% block="P9"
	Servo9,
	//% block="P11"
	Servo11,
	//% block="P12"
	Servo12
    }

   export enum Servo360 {
	//% block="P0"
	Servo0,
	//% block="P1"
	Servo1,
	//% block="P2"
	Servo2,
	//% block="P3"
	Servo3,
	//% block="P4"
	Servo4,
	//% block="P10"
	Servo10
    }

//% weight=50 color="#ff6600" weight=10 icon="\uf11e"
namespace MyServo {

    /**
     * Control Servo 0 - 180 degree 
     * @param indexSV  Select servo number to control
     * @param degree   Servo degree 0-180, eg: 90
     */
    //% blockId="Servo_servoDEGREE" block="servo|%indexSV|degree %degree"
    //% degree.min=0 degree.max=180
    export function servoDEGREE(indexSV: Servo, degree: number): void {
	if (indexSV==Servo.Servo0) {
		pins.servoWritePin(AnalogPin.P0, degree)
	}
	if (indexSV==Servo.Servo1) {
		pins.servoWritePin(AnalogPin.P1, degree)
	}
	if (indexSV==Servo.Servo2) {
		pins.servoWritePin(AnalogPin.P2, degree)
	}
	if (indexSV==Servo.Servo3) {
		pins.servoWritePin(AnalogPin.P3, degree)
	}
	if (indexSV==Servo.Servo4) {
		pins.servoWritePin(AnalogPin.P4, degree)
	}
	if (indexSV==Servo.Servo10) {
		pins.servoWritePin(AnalogPin.P10, degree)
	}
	if (indexSV==Servo.Servo5) {
		pins.servoWritePin(AnalogPin.P5, degree)
	}
	if (indexSV==Servo.Servo6) {
		pins.servoWritePin(AnalogPin.P6, degree)
	}
	if (indexSV==Servo.Servo7) {
		pins.servoWritePin(AnalogPin.P7, degree)
	}
	if (indexSV==Servo.Servo8) {
		pins.servoWritePin(AnalogPin.P8, degree)
	}
	if (indexSV==Servo.Servo9) {
		pins.servoWritePin(AnalogPin.P9, degree)
	}
	if (indexSV==Servo.Servo11) {
		pins.servoWritePin(AnalogPin.P11, degree)
	}
	if (indexSV==Servo.Servo12) {
		pins.servoWritePin(AnalogPin.P12, degree)
	}
    }

     /**
     * Servo stop
     * @param indexSVstop  Select servo number to control
     */
    //% blockId="Servo_servoSTOP" block="servo stop|%indexSVstop"
    export function servoSTOP(indexSVstop: Servo): void {
    	if (indexSVstop==Servo.Servo0) {
	        pins.servoSetPulse(AnalogPin.P0, 0)
	}
    	if (indexSVstop==Servo.Servo1) {
	        pins.servoSetPulse(AnalogPin.P1, 0)
	}
    	if (indexSVstop==Servo.Servo2) {
	        pins.servoSetPulse(AnalogPin.P2, 0)
	}
    	if (indexSVstop==Servo.Servo3) {
	        pins.servoSetPulse(AnalogPin.P3, 0)
	}
    	if (indexSVstop==Servo.Servo4) {
	        pins.servoSetPulse(AnalogPin.P4, 0)
	}
    	if (indexSVstop==Servo.Servo10) {
	        pins.servoSetPulse(AnalogPin.P10, 0)
	}
    	if (indexSVstop==Servo.Servo5) {
	        pins.servoSetPulse(AnalogPin.P5, 0)
	}
    	if (indexSVstop==Servo.Servo6) {
	        pins.servoSetPulse(AnalogPin.P6, 0)
	}
    	if (indexSVstop==Servo.Servo7) {
	        pins.servoSetPulse(AnalogPin.P7, 0)
	}
    	if (indexSVstop==Servo.Servo8) {
	        pins.servoSetPulse(AnalogPin.P8, 0)
	}
    	if (indexSVstop==Servo.Servo9) {
	        pins.servoSetPulse(AnalogPin.P9, 0)
	}
    	if (indexSVstop==Servo.Servo11) {
	        pins.servoSetPulse(AnalogPin.P11, 0)
	}
    	if (indexSVstop==Servo.Servo12) {
	        pins.servoSetPulse(AnalogPin.P12, 0)
	}
    }
}

/**
  * Coding for control Servo.
  */
   enum Servo {
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

/**
 * Custom blocks
 */
//% weight=50 color=#ff6600 icon="\uf11e"
namespace MyServo {

     /**
     * Control Servo P0 to P12 degree 0 - 180 degree 
     * @param Degree   Servo degree 0-180, eg: 90
     */

    //% blockId="MyServo_ServoRun" block="Servo %Servo|degree %Degree"
    //% Degree.min=0 Degree.max=180
    //% weight=75
    export function ServoRun(ServoSelect:Servo, Degree:number): void{
        if(ServoSelect == Servo.P0){
            pins.servoWritePin(AnalogPin.P0, Degree)
        }
        if(ServoSelect == Servo.P1){
            pins.servoWritePin(AnalogPin.P1, Degree)
        }
        if(ServoSelect == Servo.P2){
            pins.servoWritePin(AnalogPin.P2, Degree)
        }
        if(ServoSelect == Servo.P3){
            pins.servoWritePin(AnalogPin.P3, Degree)
        }
        if(ServoSelect == Servo.P4){
            pins.servoWritePin(AnalogPin.P4, Degree)
        }
        if(ServoSelect == Servo.P10){
            pins.servoWritePin(AnalogPin.P10, Degree)
        }
        if(ServoSelect == Servo.P5){
            pins.servoWritePin(AnalogPin.P5, Degree)
        }
        if(ServoSelect == Servo.P6){
            pins.servoWritePin(AnalogPin.P6, Degree)
        }
        if(ServoSelect == Servo.P7){
            pins.servoWritePin(AnalogPin.P7, Degree)
        }
        if(ServoSelect == Servo.P8){
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if(ServoSelect == Servo.P9){
            pins.servoWritePin(AnalogPin.P9, Degree)
        }
        if(ServoSelect == Servo.P11){
            pins.servoWritePin(AnalogPin.P11, Degree)
        }
        if(ServoSelect == Servo.P12){
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }
    
     /**
     * Control Servo P0 to P12 set to stop
     */
    //% blockId="MyServo_ServoStop" block="servo stop %Servo"
    //% weight=70
    export function ServoStop(ServoSelect:Servo): void{
        if(ServoSelect == Servo.P0){
           pins.servoSetPulse(AnalogPin.P0, 0)
        }
        if(ServoSelect == Servo.P1){
           pins.servoSetPulse(AnalogPin.P1, 0)
        }
        if(ServoSelect == Servo.P2){
           pins.servoSetPulse(AnalogPin.P2, 0)
        }
        if(ServoSelect == Servo.P3){
           pins.servoSetPulse(AnalogPin.P3, 0)
        }
        if(ServoSelect == Servo.P4){
           pins.servoSetPulse(AnalogPin.P4, 0)
        }
        if(ServoSelect == Servo.P10){
           pins.servoSetPulse(AnalogPin.P10, 0)
        }
        if(ServoSelect == Servo.P5){
           pins.servoSetPulse(AnalogPin.P5, 0)
        }
        if(ServoSelect == Servo.P6){
           pins.servoSetPulse(AnalogPin.P6, 0)
        }
        if(ServoSelect == Servo.P7){
           pins.servoSetPulse(AnalogPin.P7, 0)
        }
        if(ServoSelect == Servo.P8){
           pins.servoSetPulse(AnalogPin.P8, 0)
        }
        if(ServoSelect == Servo.P9){
           pins.servoSetPulse(AnalogPin.P9, 0)
        }
        if(ServoSelect == Servo.P11){
           pins.servoSetPulse(AnalogPin.P11, 0)
        }
        if(ServoSelect == Servo.P12){
           pins.servoSetPulse(AnalogPin.P12, 0)
        }
    }
}
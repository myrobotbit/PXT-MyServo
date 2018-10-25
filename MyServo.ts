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
  * Coding for control Continues servo.
  */
   enum ServoCONTI {
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

/**
 * Custom blocks
 */
//% weight=9 color=#00cccc icon="\uf11e"
namespace MyServo {

     /**
     * Control Servo P0 to P12 degree 0 - 180 degree 
     * @param Degree   Servo degree 0-180, eg: 90
     */

    //% blockId="MyServo_ServoRun" block="Servo %Servo|degree %Degree"
    //% Degree.min=0 Degree.max=180
    //% weight=100
    export function ServoRun(ServoSelect:Servo, Degree:number): void{
        if(ServoSelect == Servo.Servo0){
            pins.servoWritePin(AnalogPin.P0, Degree)
        }
        if(ServoSelect == Servo.Servo1){
            pins.servoWritePin(AnalogPin.P1, Degree)
        }
        if(ServoSelect == Servo.Servo2){
            pins.servoWritePin(AnalogPin.P2, Degree)
        }
        if(ServoSelect == Servo.Servo3){
            pins.servoWritePin(AnalogPin.P3, Degree)
        }
        if(ServoSelect == Servo.Servo4){
            pins.servoWritePin(AnalogPin.P4, Degree)
        }
        if(ServoSelect == Servo.Servo10){
            pins.servoWritePin(AnalogPin.P10, Degree)
        }
        if(ServoSelect == Servo.Servo5){
            pins.servoWritePin(AnalogPin.P5, Degree)
        }
        if(ServoSelect == Servo.Servo6){
            pins.servoWritePin(AnalogPin.P6, Degree)
        }
        if(ServoSelect == Servo.Servo7){
            pins.servoWritePin(AnalogPin.P7, Degree)
        }
        if(ServoSelect == Servo.Servo8){
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if(ServoSelect == Servo.Servo9){
            pins.servoWritePin(AnalogPin.P9, Degree)
        }
        if(ServoSelect == Servo.Servo11){
            pins.servoWritePin(AnalogPin.P11, Degree)
        }
        if(ServoSelect == Servo.Servo12){
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }
    
     /**
     * Control Servo P0 to P12 set to stop
     */
    //% blockId="MyServo_ServoStop" block="Servo stop %Servo"
    //% weight=90
    export function ServoStop(ServoSelect:Servo): void{
        if(ServoSelect == Servo.Servo0){
           pins.servoSetPulse(AnalogPin.P0, 0)
        }
        if(ServoSelect == Servo.Servo1){
           pins.servoSetPulse(AnalogPin.P1, 0)
        }
        if(ServoSelect == Servo.Servo2){
           pins.servoSetPulse(AnalogPin.P2, 0)
        }
        if(ServoSelect == Servo.Servo3){
           pins.servoSetPulse(AnalogPin.P3, 0)
        }
        if(ServoSelect == Servo.Servo4){
           pins.servoSetPulse(AnalogPin.P4, 0)
        }
        if(ServoSelect == Servo.Servo10){
           pins.servoSetPulse(AnalogPin.P10, 0)
        }
        if(ServoSelect == Servo.Servo5){
           pins.servoSetPulse(AnalogPin.P5, 0)
        }
        if(ServoSelect == Servo.Servo6){
           pins.servoSetPulse(AnalogPin.P6, 0)
        }
        if(ServoSelect == Servo.Servo7){
           pins.servoSetPulse(AnalogPin.P7, 0)
        }
        if(ServoSelect == Servo.Servo8){
           pins.servoSetPulse(AnalogPin.P8, 0)
        }
        if(ServoSelect == Servo.Servo9){
           pins.servoSetPulse(AnalogPin.P9, 0)
        }
        if(ServoSelect == Servo.Servo11){
           pins.servoSetPulse(AnalogPin.P11, 0)
        }
        if(ServoSelect == Servo.Servo12){
           pins.servoSetPulse(AnalogPin.P12, 0)
        }
    }

    /**
     * Control Servo P0 to P12 set to set pulse signal
     */
    //% blockId="MyServo_ServoKeep" block="Servo set pulse %Servo|to %uSEC |µS"
    //% uSEC.min=0 uSEC.max=2500
    //% weight=80
    export function ServoKeep(ServoSelect:Servo, uSEC:number): void {
        if(ServoSelect == Servo.Servo0){
           pins.servoSetPulse(AnalogPin.P0, uSEC)
        }
        if(ServoSelect == Servo.Servo1){
           pins.servoSetPulse(AnalogPin.P1, uSEC)
        }
        if(ServoSelect == Servo.Servo2){
           pins.servoSetPulse(AnalogPin.P2, uSEC)
        }
        if(ServoSelect == Servo.Servo3){
           pins.servoSetPulse(AnalogPin.P3, uSEC)
        }
        if(ServoSelect == Servo.Servo4){
           pins.servoSetPulse(AnalogPin.P4, uSEC)
        }
        if(ServoSelect == Servo.Servo10){
           pins.servoSetPulse(AnalogPin.P10, uSEC)
        }
        if(ServoSelect == Servo.Servo5){
           pins.servoSetPulse(AnalogPin.P5, uSEC)
        }
        if(ServoSelect == Servo.Servo6){
           pins.servoSetPulse(AnalogPin.P6, uSEC)
        }
        if(ServoSelect == Servo.Servo7){
           pins.servoSetPulse(AnalogPin.P7, uSEC)
        }
        if(ServoSelect == Servo.Servo8){
           pins.servoSetPulse(AnalogPin.P8, uSEC)
        }
        if(ServoSelect == Servo.Servo9){
           pins.servoSetPulse(AnalogPin.P9, uSEC)
        }
        if(ServoSelect == Servo.Servo11){
           pins.servoSetPulse(AnalogPin.P11, uSEC)
        }
        if(ServoSelect == Servo.Servo12){
           pins.servoSetPulse(AnalogPin.P12, uSEC)
        }
    }

      /**
     * Control Continues Servo P0 to P4 and P10
     * @param speed   Servo speed 0 = Full speed one direction, 90 = stop, 180 = full speed other direction eg: 90
     */

    //% blockId="MyServo_Servo360" block="Servo360 %ServoCONTI|speed & direction %speed"
    //% Degree.min=0 Degree.max=180
    //% color=#9966cc
    //% weight=70
    export function Servo360(ServoSelect:ServoCONTI, speed:number): void{
        if(ServoSelect == ServoCONTI.Servo0){
            pins.servoWritePin(AnalogPin.P0, speed)
        }
        if(ServoSelect == ServoCONTI.Servo1){
            pins.servoWritePin(AnalogPin.P1, speed)
        }
        if(ServoSelect == ServoCONTI.Servo2){
            pins.servoWritePin(AnalogPin.P2, speed)
        }
        if(ServoSelect == ServoCONTI.Servo3){
            pins.servoWritePin(AnalogPin.P3, speed)
        }
        if(ServoSelect == ServoCONTI.Servo4){
            pins.servoWritePin(AnalogPin.P4, speed)
        }
        if(ServoSelect == ServoCONTI.Servo10){
            pins.servoWritePin(AnalogPin.P10, speed)
        }
    }
}

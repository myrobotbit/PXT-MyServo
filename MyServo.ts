/**
  * Enumeration of Motor.
  */
/**
  * Enumeration of Servo.
  */
enum servo{
    //% block="1"
    SV1,
    //% block="2"
    SV2
}

/**
 * Custom blocks
 */
//% weight=50 color=#02AFEC icon="\uf135"
namespace iBIT {
      
    /**
     * Control Servo 1 or 2 set degree between 0 - 180
     * @param Degree servo degree 0-180, eg: 90
     */
    //% blockId="ibit_Servo" block="Servo %servo|Degree %Degree"
    //% Degree.min=0 Degree.max=180
    //% weight=75
    export function Servo(Servo:servo, Degree:number): void{
        if(Servo == servo.SV1){
            pins.servoWritePin(AnalogPin.P8, Degree)
        }
        if(Servo == servo.SV2){
            pins.servoWritePin(AnalogPin.P12, Degree)
        }
    }
    
     /**
     * Control Servo 1 or 2 set to freedom
     */
    //% blockId="ibit_ServoStop" block="Servo Stop %servo"
    //% weight=70
    export function ServoStop(Servo:servo): void{
        if(Servo == servo.SV1){
           pins.servoSetPulse(AnalogPin.P8, 0)
        }
        if(Servo == servo.SV2){
           pins.servoSetPulse(AnalogPin.P12, 0)
        }
    }
}
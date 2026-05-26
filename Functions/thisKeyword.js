//  "This" Keyword refers to an object that is executing the current piece of code.

const student ={
    name :"raju",
    age :23,
    eng:89,
    math:88,
    phy:97,
    getAvg() {
        let avg =(this.eng + this.math + this.phy) / 3 ;
        console.log(avg);
        
    }
}
student.getAvg();
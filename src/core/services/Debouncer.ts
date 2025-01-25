
export class CustomDebouncer {
    private delay: number;
    private timer: any 

    public constructor(delay: number){
        this.delay = delay;
    }


    public debounce(handler: Function){ 
        if(this.timer) { 
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(()=> handler(), this.delay)
    }

    public cleanup(){
        if(this.timer) {
            clearTimeout(this.timer)
            this.timer = null
        }
    }
}
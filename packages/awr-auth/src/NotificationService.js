class NotifyService {
    snack = null

    init = (snack) => {
        this.snack = snack;
    }

    addMessage = (message) => {
        debugger;
        this.snack.showMessage(message);
    }
}

export default new NotifyService();


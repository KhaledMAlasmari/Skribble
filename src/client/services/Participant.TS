import Player from './Player'
class Participant extends Player {
    private currentSession: string
    constructor(name: string, sessionID: string) {
        super(name)
        this.currentSession = sessionID

    }

    public getCurrentSession() {
        return this.currentSession
    }
    public setCurrentSession(sessionId: string) {
        this.currentSession = sessionId
    }
}

export default Participant
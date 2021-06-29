export default {
	registerCoach(state, payload) {
		state.coaches.push(payload)
	},
	refreshCoach(state, payload) {
		state.coaches = payload
	}
}

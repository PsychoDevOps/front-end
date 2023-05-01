import http from "./http-common"

class AppointmentsApiService{

    updateAppointment(id, data) {
        return http.put(`/appointment/${id}`, data);
    }

    createAppointment(data, patientId, psychoId) {
        return http.post(`/appointment/patient/${patientId}/psychologist/${psychoId}`, data);
    }

    getAppointmentId(id) {
        return http.get(`/appointment/${id}`);
    }

    getPatientsByPsychologistId(psychoId) {
        return http.get(`/appointment/psychologist/${psychoId}/patient`);
    }

    getAppointmentByPatientIdAndPsychologistId(patientId, psychoId) {
        return http.get(`/appointment/psychologist/${psychoId}/patient/${patientId}`);
    }

    getAppointmentsByPsychologistId(psychoId) {
        return http.get(`/appointment/psychologist/${psychoId}`);
    }

    getAppointmentsByPatientId(patientId) {
        return http.get(`/appointment/patient/${patientId}`);
    }

    deleteAppointment(id) {
        return http.delete(`/appointment/${id}`);
    }
}

export default new AppointmentsApiService();
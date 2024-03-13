import { SCORM } from 'pipwerks-scorm-api-wrapper';

const ScormHelper = {
  init() {
    SCORM.init();
  },

  getLearnerName() {
    return SCORM.get('cmi.core.student_name');
  },

  finish() {
    console.log('you have finished!');
    SCORM.set('cmi.core.lesson_status', 'completed');
    SCORM.save();
  }
};

export default ScormHelper;

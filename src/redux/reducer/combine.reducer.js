import { combineReducers } from "redux";
import siginupreducer from "./siginup.reducer";
import loginreducer from "./login.reducer";
import { userReducer } from "./user.reducer";
import { frienduserReducer } from "./friend.reducer";
import { roleSelection } from "./roleselection.reducer";
import { employerReducer } from "./employer.reducer";
import { trainerReducer } from "./trainer.reducer";
import { postRequirementReducer } from "./postRequirement.reducer";

const rootReducer = combineReducers({
  generateOTP: siginupreducer,
  verifyOTP: loginreducer,
  user: userReducer,
  frienduser: frienduserReducer,
  roleSelection: roleSelection,
  employerSignUp: employerReducer,
  trainerSignUp: trainerReducer,
  postRequirement: postRequirementReducer,
});
export default rootReducer;

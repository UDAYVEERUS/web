import { CHANGE_VARIABLE } from "./type"
// export const base_url = "http://localhost:3022"
export const base_url = "https://mern-app-api-o0hg.onrender.com"
export const changeVariable = (key, value) => {
	
    return ({

      type: CHANGE_VARIABLE,
      payload: {

          key,
          value

      }

    })
    
}

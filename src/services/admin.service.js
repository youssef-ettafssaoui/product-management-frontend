import axios from 'axios';
import UserService from './user.service';

const API_URL = "http://localhost:8080/api/admin/";
var headers = {};
class AdminService {

  constructor(){
    UserService.currentUser.subscribe(data => {
      this.headers = {
        'Content-Type':'application/json',
        'authorization':"Bearer " + (data ? data.token: '')
      };
    });
  }

  // @PutMapping("/api/admin/user-update")
  updateUser(user) {
    return axios.put(API_URL + "user-update", JSON.stringify(user), {headers: this.headers});
  }

  // @PostMapping("/api/admin/user-delete")
  deleteUser(user) {
    return axios.post(API_URL + "user-delete", JSON.stringify(user), {headers:this.headers});
  }

  // @GetMapping("/api/admin/user-all")
  findAllUsers(){
    return axios.get(API_URL + "user-all", {headers: this.headers});
  }
}

export default new AdminService();

import express from 'express'
const router = express.Router()
import {authUser,logoutUserProfile,getusers,deleteUserProfile,registerUser,getUserProfile,updateUserProfile,getUserByID,updateuser} from '../controllers/userController.js'
import { protect,admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect,admin,getusers)
router.post('/login',authUser)
router.post('/logout',logoutUserProfile)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUserProfile)
.get(protect,admin,getUserByID).put(protect,admin,updateuser)

export default router
const express = require('express');
import { Router } from 'express';

const userRouters = Router();
userRouters.route('/').post(createUser);

export default userRouters;
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './config'

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export default app

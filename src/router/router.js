import Home from '../components/views/Home.svelte';
import { writable } from 'svelte/store';

export const router = {
  '/': Home,
  '/home': Home,
  '/*' : Home
}
export default router;
export const curRoute = writable('/home')

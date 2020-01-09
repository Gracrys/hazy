import Home from '../components/views/Home.svelte';
import Web from '../components/views/Web.svelte';
import { writable } from 'svelte/store';

export const router = {
  '/': Home,
  '#web': Web,
  '#home' : Home
}
export default router;
export const curRoute = writable('/')



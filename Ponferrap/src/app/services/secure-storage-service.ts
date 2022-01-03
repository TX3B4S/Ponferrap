import { Injectable } from '@angular/core';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {

  constructor() { }

  async set(key: string, value: string){
    console.log(key,value);
    const storage = await SecureStoragePlugin.set({key, value})
      .then(success => console.log(success))
      return storage;
  }

  async get(key: string){
    key="pene";
    const storage = await SecureStoragePlugin.get({key});
    return storage;
  }

  async remove(key: string){
    const storage = await SecureStoragePlugin.remove({ key });
    return storage;
  }
}

import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", redirectTo: "form",pathMatch:"full"},
    {path: "form", redirectTo:"",pathMatch:""},
];

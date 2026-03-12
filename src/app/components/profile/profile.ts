import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

interface WorkExperience {
  company: string;
  projects: {
    name: string;
    description: string[];
  }[];
}

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name: string = 'Thitiwat Wuthimapakorn';
  
  skills: string[] = [
    'Angular',
    'PrimeNG',
    'TypeScript',
    'CSS',
    'Java',
    'Spring',
    'Sql'
  ];

  workExperiences: WorkExperience[] = [
    {
      company: 'CDGS SYSTEM (CDGS)',
      projects: [
        {
          name: 'Development',
          description: [
            'Develop front-end using Angular',
            'Develop back-end using Java, Quarkus'
          ]
        }
      ]
    },
    {
      company: 'NTTDATA - Bay Site',
      projects: [
        {
          name: 'ITMX lss3ds',
          description: []
        },
        {
          name: 'CDMS-CBT-ETHOCA',
          description: [
            'Upgrade project to java8 with server jboss eap7.4',
            'Upgrade project to java17 with server jboss eap8.1',
            'Develop program follow by requirement',
            'Develop program in oracle db such as produce',
            'Develop program generate template02, template05',
            'Develop program generate ethoca report'
          ]
        },
        {
          name: 'CMS-GUI',
          description: [
            'Upgrade project to java8 with server jboss eap7.4',
            'Upgrade project to java17 with server jboss eap8.1',
            'Develop program follow by requirement'
          ]
        }
      ]
    }
  ];

  constructor(private authService: Auth, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

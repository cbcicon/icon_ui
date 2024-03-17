import { Component, OnInit} from '@angular/core';
import { ApiService } from './dashboard.service';
import { TableModule } from 'primeng/table';

@Component({
selector: 'app-root',
  template: `
    <p-table [value]="Users" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Id</th>
            <th>Email</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-u>
        <tr>
            <td>{{ u.firstname }}</td>
            <td>{{ u.lastname }}</td>
            <td>{{ u.userid }}</td>
            <td>{{ u.emailid }}</td>
        </tr>
    </ng-template>
</p-table>
  `,
})
export class DashboardComponent implements OnInit {
    public Users: any = [];  
    constructor(private apiService: ApiService) {
      
    }

    ngOnInit() {
       
    }
    
    ngAfterViewInit(): void {  
        this.apiService.getUsers().subscribe((data: any[]) => {
            this.Users = data;
          });
      
     
        }
}

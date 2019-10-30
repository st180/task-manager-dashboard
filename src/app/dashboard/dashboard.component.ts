import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[];
  TeamMembersSummary = [];
  TeamMembers = [];
  Today: Date;

  ngOnInit() {

    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Today = new Date();

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
    ];

    this.Projects = [
      "PROJECT A", "PROJECT B", "PROJECT C", "PROJECT D"
    ];

    this.Years = [
      2019, 2018, 2017, 2016
    ];

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
    ];

    this.TeamMembers = [
      { Region: "East", Members: [
        { ID: 1, Name: "Ford", Status: "Available" },
        { ID: 2, Name: "Miller", Status: "Available" },
        { ID: 3, Name: "Jones", Status: "Busy" },
        { ID: 4, Name: "James", Status: "Busy" }
      ]},
      { Region: "West", Members: [
        { ID: 5, Name: "Johnson", Status: "Available" },
        { ID: 6, Name: "Williams", Status: "Busy" },
        { ID: 7, Name: "Brown", Status: "Busy" },
        { ID: 8, Name: "Davis", Status: "Available" }
      ]},
      { Region: "South", Members: [
        { ID: 9, Name: "Adams", Status: "Busy" },
        { ID: 10, Name: "Baker", Status: "Available" },
        { ID: 11, Name: "Thompson", Status: "Busy" },
        { ID: 12, Name: "Hughes", Status: "Available" }
      ]},
      { Region: "North", Members: [
        { ID: 13, Name: "Barnes", Status: "Busy" },
        { ID: 14, Name: "Ross", Status: "Available" },
        { ID: 15, Name: "Reed", Status: "Available" },
        { ID: 16, Name: "Rogers", Status: "Busy" }
      ]}
    ];

  }

  onProjectChange($event){
    if($event.target.innerHTML == "PROJECT A"){
      this.ProjectCost = 118569;
      this.CurrentExpenditure = 58634;
      this.AvailableFunds = 49203;
    }
    else if($event.target.innerHTML == "PROJECT B"){
      this.ProjectCost = 122589;
      this.CurrentExpenditure = 48056;
      this.AvailableFunds = 75213;
    }
    else if($event.target.innerHTML == "PROJECT C"){
      this.ProjectCost = 243845;
      this.CurrentExpenditure = 39475;
      this.AvailableFunds = 55845;
    }
    else if($event.target.innerHTML == "PROJECT D"){
      this.ProjectCost = 189456;
      this.CurrentExpenditure = 53764;
      this.AvailableFunds = 44567;
    }
  }
}

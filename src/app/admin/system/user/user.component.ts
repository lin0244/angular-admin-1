import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    leaveConfirm(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const res = confirm('确定要离开用户管理页面吗？');
            res ? resolve(true) : reject(false);
        });
    }

}

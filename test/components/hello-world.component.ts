import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class HelloWorldComponent {
  title = 'Hello World';
}

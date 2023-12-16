import { LitElement, html, css } from 'lit-element';

export class EmployeeTable extends LitElement {
  static get properties() {
    return {
      employees: { type: Array },
    };
  }

  static get styles() {
    return css`
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      th, td {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
      }

      th {
        background-color: #fea100df;
      }
      td{
        background-color: #e7ba6cdf;
      }
      @media (max-width: 800px) {
        table {
          width: 80%;
          margin: 20px auto;
        }
      }
    `;
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Age</th>
            <th>Salario</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(
            (employee) => html`
              <tr>
                <td>${employee.employee_name}</td>
                <td>${employee.employee_age}</td>
                <td>$${employee.employee_salary}</td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

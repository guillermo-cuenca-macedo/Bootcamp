import { LitElement, html } from 'lit-element';
import './employee-table.js';
import './search-button.js';
import './clear-search-button.js';
import './search-input.js';

export class Employees extends LitElement {
  static get properties() {
    return {
      employees: { type: Array },
      filteredEmployees: { type: Array },
      searchTerm: { type: String },
    };
  }

  constructor() {
    super();
    this.employees = [];
    this.filteredEmployees = [];
    this.searchTerm = '';
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.employees = data.data;
      this.filteredEmployees = [...this.employees];
    } catch (error) {
      console.error('Error consultando información:', error);
    }
  }

  handleSearch() {
    const searchInput = this.shadowRoot.querySelector('search-input');
    const searchTerm = searchInput ? searchInput.getInputValue() : '';

    this.searchTerm = searchTerm;

    if (searchTerm.trim() === '') {
      this.filteredEmployees = [...this.employees];
    } else {
      this.filteredEmployees = this.employees.filter((employee) =>
        employee.employee_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  handleClearSearch() {
    const searchInput = this.shadowRoot.querySelector('search-input');
    if (searchInput) {
      searchInput.clearInput();
    }
    this.filteredEmployees = [...this.employees];
  }

  render() {
    return html`
      <div>
        <h1>Lista de empleados</h1>
        
        <h3>Búsqueda de empleados por nombre o apellido</h3>
        <!-- componente search creado-->
        <search-input></search-input>

        <!-- componentes de botones creados-->
        <search-button @click="${this.handleSearch}"></search-button>
        <clear-search-button @click="${this.handleClearSearch}"></clear-search-button>

        <!-- componente de tabla creado-->
        <employee-table .employees="${this.filteredEmployees}"></employee-table>
      </div>
    `;
  }
}


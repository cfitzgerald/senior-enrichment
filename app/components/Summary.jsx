// FROM: acme-product-categories-react
import React, { Component } from 'react';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Summary extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    // destructure from this.state
    console.log('Summary: this.state = ', this.state);
    const { campuses, students } = this.state;

    // 1a. number of campuses: { canmpuses.length }
    // 1b. number of students: { students.length }

    // 2. list of students without a campus
    const noCampus = students.filter(student => {
      return !student.campus;
    });

    // 3.1 most expensive product: { product.name } and { product.price }
    // ...could have multiple most expensive products (re: acme products)
    // const maxPrice = products.reduce((prev, current) => {
    //   return (current.price > prev) ? current.price : prev;
    // }, 0);

    // const mostExpensive = products.filter(product => {
    //   return product.price === maxPrice;
    // });

    // // 3.2 least expensive product: { product.name } and { product.price }
    // const minPrice = products.reduce((prev, current) => {
    //   return (current.price <= prev) ? current.price : prev;
    // }, maxPrice);

    // const leastExpensive = products.filter(product => {
    //   return product.price === minPrice;
    // });

    // // 4. out of stock products
    // const outOfStock = products.filter(product => {
    //   return !product.inStock;
    // });

    return (

      <div className="col-sm-12">
        <br />
        <div className="card">
          <h3 className="card-header text-center">Administrative Summary</h3>
          <div className="card-block">

            <ul className="list-group">

              <li className="list-group-item"><span>There are <strong>{ campuses.length }</strong> campuses.</span></li>

              <li className="list-group-item">Campuses:
                <ul>
                  {
                    campuses.map(campus => {
                      return (
                        <li key={ campus.id }><strong>{ campus.name }</strong> has <strong>{ campus.students.length }</strong> students.</li>
                      );
                    })
                  }
                  <li>No campus for <strong>{ noCampus.length }</strong> student(s).</li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </div>
    );
  }

}

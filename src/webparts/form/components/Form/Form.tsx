import * as React from 'react';
import styles from './Form.module.scss';
import { IFormProps, IFormState } from './';

import { escape } from '@microsoft/sp-lodash-subset';
import { IFormData } from '../../../../models';
import { IFieldProps } from '../FormFields';

// Contact form
interface IState {
  name: string;
  email: string;
  message: string;
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // ! typed version to remove the problem of mixing state
  // ! an updated version of: this.setState( { [evt.target.name]: evt.target.value })
  // ! but I'm having an issue with the types

  //   handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement>,
  //     value: unknown
  //   ): void => {
  //     const key = e.currentTarget.name;

  //     if (Object.keys(this.state).includes(key)) {
  //       this.setState({ [key]: value } as unknown as Pick<
  //         IFormState,
  //         keyof IFormState
  //       >);
  //     }
  //     console.log('this is the email', this.state.formData);
  //   };
  public handleChangeName(e) {
    //   this.setState({ [evt.target.name]: evt.target.value });
    const value = e.target.value;
    console.log(value);
    this.setState({
      formData: {
        email: this.state.formData.name,
        name: value,
        message: value,
      },
    });

    console.log('this is the name:  ', this.state.formData.name);
  }

  public handleChangeEmail(e) {
    const value = e.target.value;
    console.log(value);
    this.setState({
      formData: {
        email: value,
        name: this.state.formData.email,
        message: value,
      },
    });
    console.log('this is the email', this.state.formData.email);
  }
  handleChangeMessage(e) {
    const value = e.target.value;
    console.log(value);
    this.setState({
      formData: {
        name: value,
        email: value,
        message: this.state.formData.message,
      },
    });
    console.log('this is the message', this.state.formData.message);
  }

  public handleSubmit(e) {
    e.preventDefault();
    alert(
      'The form data is  ' +
        'name:  ' +
        this.state.formData.name +
        'email:  ' +
        this.state.formData.email +
        'message: ' +
        this.state.formData.message
    );
    console.log('the for was submitted  ', this.state.formData);
  }

  public render(): React.ReactElement<IFormProps> {
    return (
      <section className={`${styles.form} `}>
        <h2 className={`${styles.title}`}>
          Contact us for further information
        </h2>
        <h3 className={`${styles.subTitle}`}>We aim to respond in 48 hours</h3>
        <form onSubmit={this.handleSubmit}>
          <div className={`${styles.container}`}>
            <label className={`${styles.label}`} htmlFor="name">
              Name
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>
            <input
              className={`${styles.input}`}
              type="text"
              id="name"
              defaultValue={this.state.formData.name}
              name="name"
              placeholder="Your name"
              // required
              onChange={this.props.handleChange}
            />
          </div>
          <div className={`${styles.container}`}>
            <label className={`${styles.label}`} htmlFor="email">
              Email
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>
            <input
              className={`${styles.input}`}
              type="email"
              id="email"
              defaultValue={this.state.formData.email}
              name="email"
              placeholder="Your email"
              //   required
              onChange={this.props.handleChange}
            />
          </div>
          <div className={`${styles.container}`}>
            <label className={`${styles.label}`} htmlFor="message">
              Message
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>
            <textarea
              className={`${styles.input}`}
              id="message"
              defaultValue={this.state.formData.message}
              name="message"
              placeholder="Your message"
              //   required
              onChange={this.handleChangeMessage}
            />
          </div>
          <div className={`${styles.container}`}>
            <input
              className={`${styles.button}`}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </section>
    );
  }
}

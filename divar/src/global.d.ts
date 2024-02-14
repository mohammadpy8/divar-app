import React from "react";

declare const eventFormTypes: React.FormEvent<HTMLFormElement>;
declare const eventInputTypes: React.ChangeEvent<HTMLInputElement>;
declare const eventClickTypes: React.MouseEvent<HTMLButtonElement, MouseEvent>;
declare const eventFocusTypes: React.FocusEvent<HTMLInputElement, Element>;

declare namespace eventTypes {
  export interface eventFormTypes {}
  React.FormEvent<HTMLFormElement>;
  export interface eventInputTypes {}
  React.ChangeEvent<HTMLInputElement>;
  export interface eventClickTypes {}
  React.MouseEvent<HTMLButtonElement, MouseEvent>;
  export interface eventFocusTypes {}
  React.FocusEvent<HTMLInputElement, Element>;
  export type localStorageTypes = {
    id: number;
    username: string;
    user: {
      fullName: string;
      phoneNumber: string;
    };
    role: string;
  };
}

declare namespace localStorageTypes {
  export interface localStorageTypes {
    id: number;
    title: string;
    obj: {
      full_name: string;
      number_phone: string;
    };
  }
}

declare namespace stateTypes {
  export interface stateGlobal {
    setStep(): (value: number) => void;
    setChangeModal(): (value: boolean) => void;
    setAccordion(): (value: number) => void;
  }
}

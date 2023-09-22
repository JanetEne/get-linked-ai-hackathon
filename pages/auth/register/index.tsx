import Button from '@components/Atoms/Button';
import Checkbox from '@components/Atoms/Checkbox';
import Icon from '@components/Atoms/Icon';
import Input from '@components/Atoms/Input';
import Select from '@components/Atoms/Select';
import AuthLayout from '@components/Layouts/Auth';
import Image from 'next/image';
import React, { useState } from 'react';

const Register = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <AuthLayout title="Register">
      <div className="lg:shadow-cardShadow lg:bg-white/5 w-full px-[1rem] sm:px-[2rem] md:px-[3rem] 2xl:px-[4rem] lg:py-12 py-4 lg:rounded-xl lg:bg-[rgba(255, 255, 255, 0.03)] flex flex-col gap-6">
        <p className="text-primary hidden lg:block font-semibold font-clash text-2xl">
          Register
        </p>
        <Image
          alt="movement"
          src="/assets/svg/partmovement.svg"
          width={230}
          height={230}
        />
        <p className="text-xl uppercase">Create your account</p>

        <div className="grid md:grid-cols-2 lg:gap-8 gap-4">
          <Input
            label="Team's Name"
            placeholder="Enter the name of your group"
          />
          <Input label="Phone" placeholder="Enter your phone number" />
        </div>

        <div className="grid md:grid-cols-2 lg:gap-8 gap-4">
          <Input label="Email" placeholder="Enter your email address" />
          <Input
            label="Project Topic"
            placeholder="What is your group project topic"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-[60%_30%] lg:gap-8 gap-4">
          <Select
            setState={() => {}}
            title={'Select your category'}
            label="Category"
          />
          <Select setState={() => {}} title={'Select'} label="Group Size" />
        </div>

        <p className="italic text-xs text-tetiary">
          Please review your registration details before submitting
        </p>

        <Checkbox
          label="I agreed with the event terms and conditions  and privacy policy"
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
        />

        <Button label="Register Now" />
      </div>
    </AuthLayout>
  );
};

export default Register;

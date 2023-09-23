import Button from '@components/Atoms/Button';
import Checkbox from '@components/Atoms/Checkbox';
import Icon from '@components/Atoms/Icon';
import Input from '@components/Atoms/Input';
import Select from '@components/Atoms/Select';
import AuthLayout from '@components/Layouts/Auth';
import { Modal } from '@components/Molecules/Modal';
import { getCategories } from '@pages/api/services/category';
import { register } from '@pages/api/services/user';
import { AxiosError } from 'axios';
import { ICategories } from 'interfaces/categories';
import { IRegister } from 'interfaces/user';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [team, setTeam] = useState<string>('');
  const [size, setSize] = useState<ICategories>();
  const [category, setCategory] = useState<ICategories>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const router = useRouter();

  const groupSize = ['10', '20', '30', '40', '50'];

  const getGroupSize = () => {
    return groupSize.map((item) => {
      return { id: item, name: item };
    });
  };

  const submit = async () => {
    if (!category) {
      toast.error('Please select a category');
    } else if (!email) {
      toast.error('Please add your email address');
    } else if (!phone) {
      toast.error('Please add your phone number');
    } else if (!topic) {
      toast.error('Please add your project topic');
    } else if (!size) {
      toast.error('Please select your group size');
    } else if (!team) {
      toast.error('Please add a team name');
    } else if (!checked) {
      toast.error('Agree to the terms and conditions');
    } else {
      setLoading(true);
      try {
        const res = await register({
          privacy_poclicy_accepted: checked,
          category: category?.id,
          email,
          phone_number: phone,
          project_topic: topic,
          team_name: team,
          group_size: 1,
        });
        if (res) {
          setLoading(false);
          setShowModal(true);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.data) {
            toast.error(error.response.data.email[0]);
            setLoading(false);
          } else {
            toast.error(error.message);
            setLoading(false);
          }
        }
      }
    }
  };

  const getCategoriesData = async () => {
    try {
      const res = await getCategories();
      setCategories(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <>
      <Modal isVisible={showModal} center close={setShowModal}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            alt="congratulations"
            src="/assets/images/congratulation.png"
            width={500}
            height={500}
          />
          <p className="md:text-xl text-sm text-center font-semibold leading-7">
            Congratulations <br /> you have successfully Registered!
          </p>
          <div className="flex gap-1 flex-col md:text-sm text-xs text-center">
            <p>Yes, it was easy and you did it!</p>
            <p className=" flex gap-[2px] items-center">
              check your mail box for next step
              <span>
                <Icon icon="Wink" />
              </span>
            </p>
          </div>

          <Button
            label="Back"
            onClick={() => {
              setShowModal(false);
              router.push('/');
            }}
          />
        </div>
      </Modal>
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
              onChange={(e) => setTeam(e.target.value)}
              type="text"
              required
            />
            <Input
              label="Phone"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 lg:gap-8 gap-4">
            <Input
              label="Email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Input
              label="Project Topic"
              placeholder="What is your group project topic"
              onChange={(e) => setTopic(e.target.value)}
              type="text"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-[60%_30%] lg:gap-8 gap-4">
            <Select
              onChange={(e) => setCategory(e)}
              title={'Select your category'}
              label="Category"
              defaultValue={category?.name}
            />
            <Select
              onChange={(e) => setSize(e)}
              title={'Select'}
              label="Group Size"
              data={getGroupSize()}
            />
          </div>

          <p className="italic text-xs text-tetiary">
            Please review your registration details before submitting
          </p>

          <Checkbox
            label="I agreed with the event terms and conditions  and privacy policy"
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
          />

          <Button label="Register Now" onClick={submit} disabled={loading} />
        </div>
      </AuthLayout>
    </>
  );
};

export default Register;

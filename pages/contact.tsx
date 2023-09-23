import Button from '@components/Atoms/Button';
import Icon from '@components/Atoms/Icon';
import Input from '@components/Atoms/Input';
import TextArea from '@components/Atoms/TextArea';
import ContactLayout from '@components/Layouts/Contact';
import { Modal } from '@components/Molecules/Modal';
import { IContact } from 'interfaces/user';
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { contact } from './api/services/user';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const Contact = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputs, setInputs] = useState<IContact>({} as IContact);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const submit = async () => {
    if (!inputs.first_name) {
      toast.error('Please enter your first name');
    } else if (!inputs.email) {
      toast.error('Please enter your email address');
    } else if (!inputs.phone_number) {
      toast.error('Please enter your phone number');
    } else if (!inputs.message) {
      toast.error('Please add your message');
    } else {
      setLoading(true);
      try {
        const res = await contact(inputs);
        if (res.status === 201) {
          setLoading(false);
          setShowModal(true);
          setInputs({} as IContact);
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
            Your message has been sent!
          </p>

          <Button
            label="Back"
            onClick={() => {
              setShowModal(false);
              router.push('/');
            }}
          />
        </div>
      </Modal>
      <ContactLayout title="Contact">
        <div className="lg:shadow-cardShadow lg:bg-white/5 w-full px-[1rem] sm:px-[2rem] md:px-[3rem] 2xl:px-[4rem] lg:py-12 py-4 lg:rounded-xl lg:bg-[rgba(255, 255, 255, 0.03)] flex flex-col gap-6">
          <Icon icon="ArrowBack" className="flex lg:hidden mb-6 w-6 h-6" />

          <p className="text-primary font-semibold font-clash text-2xl">
            Questions or need assistance? <br /> Let us know about it!
          </p>

          <p className="text-xs flex lg:hidden">
            Email us below to any question related <br />
            to our event
          </p>

          <Input
            placeholder="First Name"
            className="!text-white placeholder:text-white"
            onChange={(e) =>
              setInputs({ ...inputs, first_name: e.target.value })
            }
            type="text"
            required
          />
          <Input
            placeholder="Email"
            className="!text-white placeholder:text-white"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            type="email"
            required
          />

          <Input
            placeholder="Phone"
            className="!text-white placeholder:text-white"
            onChange={(e) =>
              setInputs({ ...inputs, phone_number: e.target.value })
            }
            type="phone"
            required
          />
          <TextArea
            placeholder="Message"
            className="!text-white placeholder:text-white"
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
            required
          />

          <div className="mt-4 justify-center items-center flex">
            <div className="lg:w-1/3 w-2/5">
              <Button label="Submit" onClick={submit} disabled={loading} />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-1 mt-6 items-center">
            <p className="text-primary text-sm">Share on</p>
            <div className="flex gap-x-4 items-center">
              <a
                href={
                  'https://instagram.com/getlinked.ai?igshid=MzRlODBiNWFlZA=='
                }
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="Instagram" className="w-5 h-5" />
              </a>
              <a
                href={'https://twitter.com/getLinkedai'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="X" />
              </a>
              <a href={'#'}>
                <Icon icon="Facebook" />
              </a>
              <a
                href={'https://www.linkedin.com/company/getlinked-ai/'}
                rel="noreferrer"
                target="_blank"
              >
                <Icon icon="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </ContactLayout>
    </>
  );
};

export default Contact;

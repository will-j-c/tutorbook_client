import { useEffect, useState } from 'react';
import { storage } from '../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import axios from '../../api/axios';
import Avatar from '../avatars/Avatar';
import FilledButton from '../utils/buttons/FilledButton';

function UserEditForm(props) {
  const [cookies, setCookie] = useCookies();
  const { uuid } = useParams();
  const { email, first_name, last_name, profile_img_url } = props.data;
  const [previewImg, setPreviewImg] = useState(profile_img_url);
  const [img, setImg] = useState(null);
  const [form, setForm] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    profile_img_url: previewImg
  });
  const handleChange = (type) => (event) => {
    if (type === 'image') {
      setImg(event.target.files[0]);
      return;
    }
    setForm((previous) => ({ ...previous, [type]: event.target.value }));
  };

  useEffect(() => {
    if (img) {
      setPreviewImg(URL.createObjectURL(img));
    }
  }, [img]);

  const postUpdate = (data) => {
    axios
      .patch(`users/${uuid}`, data, { headers: { Authorization: `Bearer ${cookies.idToken}` } })
      .then(
        (resonse) => {
          toast.success('Successfully updated data');
        },
        (error) => {
          toast.error('Failed to update profile');
        }
      );
  };

  const updateUserProfile = (event) => {
    if (img) {
      event.preventDefault();
      // Upload the photo to google
      const imageRef = ref(storage, img.name);
      const formData = new FormData();
      formData.append(img.name, img);
      uploadBytes(imageRef, img).then((snapshot) => {
        getDownloadURL(imageRef).then((url) => {
          const toSend = { ...form, profile_img_url: url };
          postUpdate(toSend);
          setCookie('profile_img_url', url)
        });
      });
    }
    postUpdate(form);
  };

  return (
    <div className="max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 text-titleText bg-primary rounded">
      <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <Avatar size={'h-40'} profile_img_url={previewImg} />
        <div className="flex flex-col items-center gap-3">
          <label htmlFor="files" className="block text-sm font-medium">
            Update profile image
          </label>
          <div className="flex">
            <input
              type="file"
              name="files"
              id="files"
              accept="image/*"
              onChange={handleChange('image')}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              value={form.first_name}
              name="firstName"
              onChange={handleChange('first_name')}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm placeholder:text-primary"
              value={form.last_name}
              name="lastName"
              onChange={handleChange('last_name')}
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <h1>{email}</h1>
          </div>
        </div>

        <div className="flex column items-center flex-col justify-between">
          <FilledButton label="Update user profile" action={updateUserProfile} />
        </div>
      </form>
    </div>
  );
}

export default UserEditForm;

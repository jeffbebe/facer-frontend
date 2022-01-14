export type PicturesStateKeys = Array<'uploadPicture' | 'downloadPictures'>;

export type PicturesFetchKeys = PicturesStateKeys[number];

export interface PicturesState {
  isFetching: PicturesStateKeys;
  pictures: string[];
}

export interface UploadPictureData {
  formData: FormData;
  onSuccess: () => void;
}

export interface Event<T = EventTarget> {
  target: T;
}

export type PicturesStateKeys = Array<
  'uploadPicture' | 'downloadPictures' | 'detectFaces' | 'deletePicture'
>;

export type PicturesFetchKeys = PicturesStateKeys[number];

export interface PicturesState {
  isFetching: PicturesStateKeys;
  pictures: DownloadedPicture[];
}

export interface UploadPictureData {
  formData: FormData;
  onSuccess: () => void;
}

export interface DetectFacesRequestData {
  formData: FormData;
  terminateErrors?: boolean;
  onSuccess: (frames: DetectedFacesFrame[]) => void;
}

export interface Event<T = EventTarget> {
  target: T;
}

export interface DownloadedPicture {
  name: string;
  image: string;
  id: string;
}

export interface DeletePictureRequestData {
  id: string;
  onSuccess: () => void;
}

export interface DetectedFacesFrame {
  name: string;
  coordinates: [number, number, number, number];
}

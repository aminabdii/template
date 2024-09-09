export interface UploadInputProps {
  setValue: (field: unknown, fileUploaded: unknown) => void;
  field: string;
  type: string;
  isNeeded?: boolean;
  label: string;
}

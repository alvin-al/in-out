export interface TopBarProps {
  page: string;
}

export interface Users {
  user_id: number;
  user_name: string;
  position: string;
}

export interface InOutLogs {
  log_id?: number; // Optional jika menggunakan auto-increment di database
  activity_type: string;
  user_id: number;
  crate_id: string[]; // Ubah dari object[] ke string[]
  timestamp: number;
}

export interface Crate {
  crate_code: string;
  color: string;
  size: number;
  status: boolean;
  number: number;
}

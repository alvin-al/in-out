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
  pic: { user_name: string } | null;
  crate_id: string[]; // Ubah dari object[] ke string[]
  timestamp: number;
  operator: { user_name: string } | null;
  batch_id: string | null;
}

export interface Crate {
  crate_code: string;
  color: string;
  size: number;
  available: boolean;
  number: number;
}

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  value: number | undefined;
  uom: string;
  className?: string;
}

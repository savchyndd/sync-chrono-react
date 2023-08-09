import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import {
  ARHIVE_NOTE,
  CREATE_NOTE,
  DEFAULT,
  DELETE_NOTE,
  EDIT_NOTE,
  EDIT_NOTE_SUBMIT,
  UNARHIVE_NOTE,
} from "../../../constants/btnOptConst";

const meta: Meta<typeof Button> = {
  title: "Sync-Chrono/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    btnOption: DEFAULT,
    onClick: () => {},
  },
};
export const CreateNote: Story = {
  args: {
    btnOption: CREATE_NOTE,
    onClick: () => {},
  },
};
export const EditNoteSubmit: Story = {
  args: {
    btnOption: EDIT_NOTE_SUBMIT,
  },
};
export const EditNote: Story = {
  args: {
    btnOption: EDIT_NOTE,
    onClick: () => {},
  },
};
export const ArhiveNote: Story = {
  args: {
    btnOption: ARHIVE_NOTE,
    onClick: () => {},
  },
};
export const UnarhiveNote: Story = {
  args: {
    btnOption: UNARHIVE_NOTE,
    onClick: () => {},
  },
};
export const DeleteNote: Story = {
  args: {
    btnOption: DELETE_NOTE,
    onClick: () => {},
  },
};

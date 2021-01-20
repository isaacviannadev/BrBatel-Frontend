import React, { useCallback, useRef } from "react";

import { FiSave } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form, Label, Button, GroupInputs } from "./styles";
import Modal from "../modal";
import Input from "../input";

interface Item {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
}

interface ItemEdit {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
}

interface ItemData {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateItem: (Item: Item) => void;
  editingItem: ItemEdit;
  deleteItem(id: string): void;
}

const ModalEditItem: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  editingItem,
  handleUpdateItem,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ItemData) => {
      console.log("data:", data);
      handleUpdateItem(data);
      setIsOpen();
    },
    [handleUpdateItem, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingItem}>
        <h1>Editar Item</h1>

        <div>
          <Label>Nome do Item</Label>
          <Input name="itemName" readOnly/>
        </div>

        <GroupInputs>
          <div>
            <Label>Quantidade Atual</Label>
            <Input name="amountCurrent" />
          </div>
          <div>
            <Label>Quantidade Mínima</Label>
            <Input name="amountMinimum" />
          </div>
        </GroupInputs>

        <GroupInputs>
          <div>
            <Label>$ Custo</Label>
            <Input name="priceCost" type="number" step="0.01" />
          </div>
          <div>
            <Label>$ Revenda</Label>
            <Input name="priceSell" type="number" step="0.01" />
          </div>
        </GroupInputs>

        <Button>
          <button>
            <FiSave size={24} />
            <p>Salvar</p>
          </button>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalEditItem;

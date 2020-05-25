import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }
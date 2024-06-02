import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar os dados iniciais da tabela
function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais da tabela
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

// Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  // Carrega os dados iniciais na renderização inicial do componente
  useEffect(() => {
    setTimeout(() => { // Simula o tempo de carregamento dos dados
      setTarefas(initialRows);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    let tarefaParaEditar = tarefas.filter(obj => obj.idTarefa === id)[0];
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas(current => current.filter(tarefa => tarefa.idTarefa !== id));
  };

  const handleDeletarSelecionados = () => {
    setTarefas(current => current.filter(tarefa => !tarefa.selecionada));
  };

  const handleSelect = (id) => {
    setTarefas(current =>
      current.map(tarefa =>
        tarefa.idTarefa === id ? { ...tarefa, selecionada: !tarefa.selecionada } : tarefa
      )
    );
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setTarefas(current => current.map(tarefa => ({ ...tarefa, selecionada: checked })));
  };

  const hasSelected = tarefas.some(tarefa => tarefa.selecionada);

  return (
    <>
      <Card>
        <CardHeader
          title="Tarefas"
          subheader="Listagem de Tarefas"
        />
        <CardContent>
          {loading ? (
            <CircularProgress />
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        indeterminate={tarefas.some(tarefa => tarefa.selecionada) && !tarefas.every(tarefa => tarefa.selecionada)}
                        checked={tarefas.length > 0 && tarefas.every(tarefa => tarefa.selecionada)}
                        onChange={handleSelectAll}
                        inputProps={{ 'aria-label': 'select all tasks' }}
                      />
                    </TableCell>
                    <TableCell>Título</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Data de Início</TableCell>
                    <TableCell align="right">Data de Finalização</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Recurso</TableCell>
                    <TableCell align="center">Editar</TableCell>
                    <TableCell align="center">Deletar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tarefas.map((row, indice) => (
                    <TableRow key={indice} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center">
                        <Checkbox
                          checked={!!row.selecionada}
                          onChange={() => handleSelect(row.idTarefa)}
                          inputProps={{ 'aria-label': `select task ${row.idTarefa}` }}
                        />
                      </TableCell>
                      <TableCell>{row.tituloTarefa}</TableCell>
                      <TableCell align="right">{row.descricaoTarefa}</TableCell>
                      <TableCell align="right">{row.inicioTarefa}</TableCell>
                      <TableCell align="right">{row.fimTarefa}</TableCell>
                      <TableCell align="right">{row.statusTarefa}</TableCell>
                      <TableCell align="right">{row.recursoTarefa}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar Tarefa">
                          <Button variant="contained" color="success" onClick={() => handleEditar(row.idTarefa)}>
                            <EditIcon fontSize="small" />
                          </Button>
                        </Tooltip>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Deletar Tarefa">
                          <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}>
                            <DeleteIcon fontSize="small" />
                          </Button>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpen}>Criar Tarefa</Button>
          <Button size="small" variant="outlined">Cancelar</Button>
          {hasSelected && (
            <Button size="small" variant="contained" color="error" onClick={handleDeletarSelecionados} startIcon={<DeleteIcon />}>
              Deletar Selecionados
            </Button>
          )}
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>
      <Modal
        open={openEditar}
        onClose={handleCloseEditar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <EditarTarefa handleCloseEditar={handleCloseEditar} idTarefaSelecionada={idTarefaSelecionada} tarefas={tarefas} tarefa={tarefa} setTarefas={setTarefas} />
        </div>
      </Modal>
    </>
  );
};

export default ListarTarefa;

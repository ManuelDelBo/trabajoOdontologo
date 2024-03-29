package com.dh.ClinicaOdontologica.service;

import com.dh.ClinicaOdontologica.entity.Odontologo;

import java.util.List;
import java.util.Optional;

public interface IOdontologoService {
    Odontologo guardar (Odontologo odontologo);

    List<Odontologo> listarTodos();

    Odontologo buscarPorId(Long id);;

    void actualizar(Odontologo odontologo);

    void eliminar(Long id);

    Optional<Odontologo> findByMatricula(String matricula);
}

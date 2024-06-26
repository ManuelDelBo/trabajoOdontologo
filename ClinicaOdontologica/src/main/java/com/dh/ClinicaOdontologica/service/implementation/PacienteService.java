package com.dh.ClinicaOdontologica.service.implementation;

import com.dh.ClinicaOdontologica.entity.Paciente;
import com.dh.ClinicaOdontologica.repository.IPacienteRepository;
import com.dh.ClinicaOdontologica.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService implements IPacienteService {

    private IPacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(IPacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Override
    public Paciente guardar(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    @Override
    public List<Paciente> listarTodos() {
        return pacienteRepository.findAll();
    }

    @Override
    public Paciente buscarPorId(Long id) {
        Optional<Paciente> pacienteOptional = pacienteRepository.findById(id);
        if (pacienteOptional.isPresent()) {
            return pacienteOptional.get();
        }
        return null;
    }

    @Override
    public void eliminar(Long id) {
        Optional<Paciente> pacienteOptional = pacienteRepository.findById(id);
        pacienteOptional.ifPresent(pacienteRepository::delete);
    }

    @Override
    public void actualizar(Paciente paciente) {
        pacienteRepository.save(paciente);
    }
}
